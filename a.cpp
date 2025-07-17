#include<bits/stdc++.h>
using namespace std;

vector<int> primes;
map<pair<int,int>, int> memo;

void generatePrimes() {
    vector<bool> isPrime(201, true);
    isPrime[0] = isPrime[1] = false;
    
    for (int i = 2; i <= 200; i++) {
        if (isPrime[i]) {
            primes.push_back(i);
            for (int j = i * i; j <= 200; j += i) {
                isPrime[j] = false;
            }
        }
    }
}

int grundy(int x, int y) {
    if (x == 0 && y == 0) return 0;
    
    pair<int,int> state = {x, y};
    if (memo.find(state) != memo.end()) {
        return memo[state];
    }
    
    set<int> reachable;
    
    // Try all possible moves
    for (int prime : primes) {
        // Move in x direction
        if (x >= prime) {
            reachable.insert(grundy(x - prime, y));
        }
        // Move in y direction
        if (y >= prime) {
            reachable.insert(grundy(x, y - prime));
        }
        // No point checking larger primes
        if (prime > max(x, y)) break;
    }
    
    // Find mex (minimum excludant)
    int mex = 0;
    while (reachable.count(mex)) {
        mex++;
    }
    
    return memo[state] = mex;
}

string solve(int N, vector<pair<int,int>>& stones) {
    generatePrimes();
    memo.clear();
    
    int xorSum = 0;
    for (auto& stone : stones) {
        xorSum ^= grundy(stone.first, stone.second);
    }
    
    return (xorSum != 0) ? "A" : "B";
}

int main() {
    int T;
    cin >> T;
    
    while (T--) {
        int N;
        cin >> N;
        
        vector<pair<int,int>> stones(N);
        for (int i = 0; i < N; i++) {
            cin >> stones[i].first >> stones[i].second;
        }
        
        cout << solve(N, stones) << "\n";
    }
    
    return 0;
}