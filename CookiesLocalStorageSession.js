
/*
| Feature                | Cookies                              | Local Storage                   | Session Storage                                 |
| ---------------------- | ------------------------------------ | ------------------------------- | ----------------------------------------------- |
| **Capacity**           | ~4 KB                                | ~10 MB                          | ~5 MB                                           |
| **Browsers**           | HTML4 / HTML5                        | HTML5                           | HTML5                                           |
| **Accessible from**    | Any window                           | Any window                      | Same tab                                        |
| **Expires**            | Manually set                         | Never                           | On tab close                                    |
| **Storage Location**   | Browser and server                   | Browser only                    | Browser only                                    |
| **Sent with requests** | Yes                                  | No                              | No                                              |
| **Persistence**        | Can be persistent or session-based   | Persistent                      | Temporary (until tab closes)                    |
| **Use Case**           | Tracking, authentication, small data | Storing larger client-side data | Storing temporary data for a single tab/session |
| **Security**           | Can be accessed by server (if sent)  | Only accessible via JavaScript  | Only accessible via JavaScript                  |

Key notes / additions:

Cookies: Sent automatically with every HTTP request to the server, which can affect performance. Often used for authentication tokens.
Local Storage: Data persists even after closing the browser, not sent with requests, and usually used for larger client-side storage (e.g., user preferences).
Session Storage: Data only exists for the lifetime of the tab. Great for temporary states like form data before submission.


Cookies (Client-Side)
Small text files stored in the browser by a website.
Can persist even after closing the tab or browser (until expiry date or manually deleted).
Accessible by both browser (JavaScript) and server (sent automatically with every HTTP request).
Common uses:
“Remember me” login
Tracking user behavior (analytics/ads)


🔹 Session Storage (Client-Side)
Part of Web Storage API in the browser (HTML5 feature).
Data is stored only in the browser tab.
Gets cleared when the tab or window is closed.
Example: You type something in a form, navigate around in the same tab, and the data stays. But if you open a new tab → data is gone.
Stored on client-side only (server doesn’t see it unless you send it manually via JS).

🔹 Session (Server-Side)
Managed by the backend (server), not the browser.
Typically uses a Session ID stored in a cookie to identify the user.
Data (like login state, shopping cart, user preferences) is stored on the server.
Session ends when:
The user logs out,
The session times out (e.g., 30 min of inactivity), or
The server is restarted (unless persisted).


| Feature                   | **Session Storage (Client-Side)**                      | **Session (Server-Side)**                                                 |
| ------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------- |
| **Where stored?**         | In the **browser’s memory**, only for the current tab  | On the **server** (database, memory, or file system)                      |
| **Lifetime**              | Until the **tab/window is closed**                     | Until user logs out or session times out (e.g., 30 min inactivity)        |
| **Scope**                 | **Per tab** (different tabs don’t share it)            | **Shared across all tabs** (as long as the session ID cookie is valid)    |
| **Accessible by**         | JavaScript on the client                               | Server-side code (PHP, Node.js, Django, etc.)                             |
| **Data Size Limit**       | ~5MB (depends on browser)                              | Depends on server resources (usually much larger)                         |
| **Security**              | Can be read by client-side JS (less secure if misused) | Safer — stored on server, user only has session ID                        |
| **Use Cases**             | Temporary form data, state per tab, UI preferences     | Login/authentication, shopping carts, user profiles, payment sessions     |
| **Connection to Cookies** | Independent (not sent with requests)                   | Usually **identified via a cookie** (`session_id`) sent with each request |



✅ Simple difference:
Session Storage = Browser memory (client-side, per tab).
Session = Server memory (server-side, shared across tabs for the same user if cookie/session ID matches).

Example with login:

If you log in on a site:
Session (server) stores your user ID on the backend.
Cookie holds your session ID so the server knows "it’s you."
If devs wanted, they might use Session Storage to hold something temporary like a form draft, not your actual login.



Cookies
Size Limit: ~4KB per cookie (small storage).
Lifetime: Can have an expiry date; otherwise expires when the browser closes (session cookie).
Where Stored: Saved in the browser but sent to the server with every HTTP request (in request headers).
Use Case: Best for server-related info like authentication/session tokens, remembering logged-in users, tracking.
Accessible By: JavaScript (document.cookie) and server.
Performance: Slower (extra data sent to server every request).

Local Storage
Size Limit: ~5–10 MB (much larger than cookies).
Lifetime: Data persists until manually cleared by user or code (doesn’t expire automatically).
Where Stored: Only in the browser (client-side), not sent to server automatically.
Use Case: Storing large amounts of client-only data like preferences, themes, cart items, form drafts.
Accessible By: JavaScript (localStorage).
Performance: Faster (no server round trip).


Cookies → small, server + client, expire.
Local Storage → bigger, only client-side, persistent.




1. What’s happening when you see retargeted ads?
Suppose you searched for shoes on Myntra and later see ads for the same shoes on Facebook.

Here’s what’s going on step by step:
1) Myntra sets a cookie on your browser
When you visit Myntra, their site (or an ad network embedded on their site) stores a tracking cookie in your browser.
This cookie might include a unique ID like user_12345 — it does not usually contain your personal name or password, just a unique identifier.

2)You leave Myntra and browse other sites
Many websites, including Facebook, have ad networks like Google Ads, Meta Ads, etc., embedded.
These ad networks can read the tracking cookie (or see the unique ID if they set their own cookie via Myntra).

3)Ad networks match the cookie ID
The ad network knows: “User with ID 12345 visited Myntra and looked at shoes.”
So when you browse Facebook, the network serves shoe ads tailored to you.

2. Are your cookies shared?

Not exactly “sharing your cookies”
Cookies are per domain, meaning Myntra’s cookies cannot be directly read by Facebook.
But advertising/tracking networks can set cookies across multiple websites (called third-party cookies).
Example: doubleclick.net or facebook.com pixels on Myntra.
These cookies track you across sites without giving Facebook direct access to Myntra’s cookies.

What they know
They know your browser/device ID, visited pages, products viewed.
Usually no personal info like passwords unless you typed it somewhere.

3. How this is used for retargeting
You visited Myntra → tracking cookie recorded → ad network remembered “shoe interest” → later, Facebook shows shoe ads.
This is why ads “follow you around” — it’s based on browser/device tracking, not direct cookie sharing.

✅ Summary

Cookies are not “shared” between sites, but third-party cookies let ad networks track users across multiple sites.
They identify your browser and interests, not your personal info.
Retargeting ads = matching your browsing behaviour to ads using these tracking cookies.




1. Who pays whom?
Myntra (advertiser) wants you to see their shoes even after you leave the site.
They pay ad networks (like Google Ads, Facebook Ads, or other ad companies) to show ads to users who visited Myntra.
These ad networks use third-party cookies or pixels to track user behavior across other websites.





why third-party cookies are disappearing and what’s replacing them.
1. The problem with third-party cookies
Privacy concerns: Cookies allowed ad networks to track users across multiple websites without explicit consent.
Browser restrictions:
Safari (Apple) and Firefox block third-party cookies by default.
Chrome (Google) is planning to phase them out completely.
Regulations: Laws like GDPR (Europe) and CCPA (California) require websites to get consent before tracking users.


2. What’s replacing third-party cookies?
a) First-party data
Websites collect their own data directly (like Myntra tracking you on their site only).
No third-party cookie needed.
Example: Myntra remembers your search history only when you are on Myntra.

1. First-party ads on Myntra

When you browse Myntra, everything happens on Myntra’s own website.
Myntra already knows what you’re doing:
Products you clicked
Products you searched for
Items in your cart
This is first-party data — no third-party cookies are needed because Myntra owns the website.

2. How they decide which ads to show

You search for “running shoes.”
Myntra stores this info in first-party storage (like their own server session or local storage).
Myntra’s website dynamically changes the banners and recommendations to show:
“People who viewed running shoes also bought…”
“Recommended for you”
All of this happens inside Myntra, using your actions on their site.

On Myntra (first-party ads):
Uses Myntra’s own data, no need to track you elsewhere.
Fully under their control.
On other sites like Facebook (retargeting):
Requires third-party cookies or ad networks to show you the same Myntra shoes elsewhere.


✅ In short:
On Myntra: They use first-party tracking → they know your browsing behavior on their site → can show relevant products/ads immediately.
Off Myntra (cross-site): They need ad networks + cookies to follow you around.




b) Privacy Sandbox / FLoC / Topics API (Google)
Google’s new approach groups users with similar interests instead of tracking individuals.
Your browser shares only “interest topics,” not personal history.
Advertisers get targeting, but your identity is private.

. Google Privacy Sandbox / Topics API

Where it works: Across the web (outside Myntra).
How it works:
Your browser locally groups your interests into “topics” (e.g., Sports Shoes, Fitness).
Only these interest topics are shared with websites that serve ads.
Advertisers see: “This user is interested in Sports Shoes” — but don’t see your identity, name, or exact browsing history
Data shared: Only broad interest categories → your personal actions on Myntra remain private.



✅ In short:
Myntra’s method = exact personalised ads on their own site.
Privacy Sandbox = broad, anonymous interest-based ads across sites, privacy-friendly.



This site uses cookies. Accept/Reject” banners you see everywhere — what’s really going on inside. Let’s break it down carefully, step by step.

1. Why websites show cookie consent banners
1)Privacy laws require it
GDPR (Europe), CCPA (California), and similar laws around the world require websites to:
Inform users that cookies are being used
Ask for permission for certain types of cookies (especially third-party tracking cookies)
Without consent, websites could face legal penalties.

2)Types of cookies
Websites often use multiple types of cookies:
| Type                                  | Purpose                                                          | Consent Needed? |
| ------------------------------------- | ---------------------------------------------------------------- | --------------- |
| **Necessary cookies**                 | Required for the site to function (login, cart, page navigation) | Usually NO      |
| **Preferences / Functional cookies**  | Remember language, theme, etc.                                   | Sometimes YES   |
| **Analytics / Performance cookies**   | Track user behavior on the site                                  | YES             |
| **Advertising / Third-party cookies** | Retargeting, ad networks                                         | YES             |



2. What happens when you see the banner
1)Website loads your page
It may load minimal “necessary” cookies immediately.
Scripts for tracking or ads are paused until you accept.

2)You click “Accept”
Website runs scripts that:
Set cookies in your browser (first-party or third-party)
Allow ad networks or analytics tools to track you
Example: Google Analytics can now start recording your page views.

3)You click “Reject”
Website only sets necessary cookies.
Tracking/ads cookies are blocked or not initialized.

4)Your choice is stored
Usually in a first-party cookie called something like cookie_consent=true/false.
Next time you visit, the site knows your choice and won’t show the banner again.


4. Key points

Necessary cookies don’t require consent
E.g., login sessions, shopping cart.
Consent only applies to optional cookies
Analytics, marketing, advertising, personalization beyond essential functionality.
The website usually stores your choice in a cookie
So you don’t get asked every time you visit.
You can change your choice anytime
Most websites provide a “Privacy Settings” or “Cookie Settings” option.

In short:
Banner = legal + technical control to respect your privacy.
Accept → optional cookies and tracking start.
Reject → only essential cookies are active.
Everything is controlled via scripts and cookies in your browser.

*/