#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cin >> n;
    vector<int> strengths(n);
    for (int i = 0; i < n; i++) {
        cin >> strengths[i];
    }

    int m;
    cin >> m;
    vector<pair<char, int>> actions;
    for (int i = 0; i < m; i++) {
        char act;
        int team;
        cin >> act >> team;
        actions.push_back(make_pair(act, team));
    }

    vector<bool> available(n, true);
    long team1_strength = 0, team2_strength = 0;

    for (int i = 0; i < m; i++) {
        int max_index = -1;
        for (int j = 0; j < n; j++) {
            if (available[j]) {
                if (max_index == -1 || strengths[j] > strengths[max_index]) {
                    max_index = j;
                }
            }
        }
        if (max_index == -1) {
            break;
        }

        char action_type = actions[i].first;
        int team = actions[i].second;

        if (action_type == 'b') {
            available[max_index] = false;
        } else if (action_type == 'p') {
            if (team == 1) {
                team1_strength += strengths[max_index];
            } else if (team == 2) {
                team2_strength += strengths[max_index];
            }
            available[max_index] = false;
        }
    }

    cout << (team1_strength - team2_strength) << endl;

    return 0;
}