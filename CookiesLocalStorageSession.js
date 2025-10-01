
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
*/