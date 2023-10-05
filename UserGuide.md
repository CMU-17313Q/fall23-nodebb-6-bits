User Guide

### Feature: Anonymous Posting on CMU-17313Q's NodeBB
This feature allows users to make posts without revealing their actual username. Instead, the system will use the name "anon" for such posts.

### How to use this feature:
Creating an Anonymous Post:
When creating a new post, look for an option titled "Post as Anonymous".
Select this option before submitting your post.
Once the post is published, other users will see "anon" as the author, keeping your identity hidden.

Editing an Anonymous Post:
If you've made an anonymous post and wish to edit it, the process remains the same as editing any other post.
Remember, even after editing, the post remains anonymous.

Viewing an Anonymous Post:
These posts will appear with the username "anon".
As a reader, there's no method to determine the real identity of the poster.

Testing this feature:
Automated Tests for Anonymous Posting:
The automated tests for this feature can be found in the repository under test/posts/uploads.js.

Here's a breakdown of what's being tested (backend):
Anonymous Post Creation: This test checks if a post made with the "Anonymous" option truly hides the user's actual identity. The test asserts that the username and display name of such a post should be "anon", and the user ID is set to -1.

Ensuring Data Integrity:
Ensures that other post data (like content) remains intact and only the user identity is anonymized. These tests are designed to ensure that the anonymous posting feature works as expected without unintentionally modifying other parts of a post. They are sufficient for covering the changes made because they address the core functionality of the feature: keeping the user's identity hidden.

Conclusion
Anonymous posting is a valuable feature for those who wish to share information or ask questions without revealing their identity. As with all features, remember to use it responsibly. If you have any further questions or feedback about this feature, please refer to our repository's issues section.

###  Feature: Be right back status on CMU-17313Q's NodeBB
This feature is adding one more option to the user status as the original options are (online, offline, away, invisible) So by having the “Be right back” status is giving the user the option to show the other users that the user will be back soon.

How to use this feature:

Assigning the “Be right back” status:
After logging in the user is automatically assigned to “online” status but the user can click on their photo profile and a drop down menu  will have all the user status that the user can use to indicate their status. By clicking on the option “Be right back” a blue circle will appear next to the user’s photo profile referring to their status as “Be right back”.

Viewing the “Be right back” status:
The status of the user would appear bolded under the drop down menu of the user’s profile as well as on the main chat window next to their name. When a user sets this status, it signifies that they are temporarily away but intend to return shortly. This feature is especially useful in chat environments where timely responses are anticipated, allowing other participants to know when someone is not immediately available.

Removing the “Be right back” status:
Removing the “Be right back” status can be achieved by clicking on the user’s profile picture and then choosing another status from the drop down menu. Choosing another status will update the user status and replace the “Be right back” status to the new status chosen by the user.

Testing this feature:
We tested the "Be right back" feature by creating a new user profile within the test environment and adjusting their status using the status attribute.. After logging in, the default status value was checked to ensure it's set to "online", as expected. We then set the status to "Be right back" using the same status function and verified if the change was reflected correctly. Given the default status value is "online", this test is sufficient to check if the feature works because the only way to validate the functionality of the "Be right back" status is to observe the change and save of the status in the database.

The test can be found in the file located at : test/user.js lines 1071-1077
###  Feature: Marking topic as answered on CMU-17313Q's NodeBB
This feature introduces an additional layer of clarity in forum discussions by allowing users to mark topics as either "answered" or "unanswered." Such a mechanism helps to categorize and allows users to know if the question has been answered in forum topics based on their resolution status, ensuring users can navigate through discussions more efficiently.

How to use this feature:

Marking a Topic as Answered:
After posting a question or topic, the user will have the option to mark it as "answered" once they feel that they've received a satisfactory response. To do this, the user can click on the "Mark as Answered" button located below their original post or next to the satisfactory response. Once clicked,the button would switch to ‘Mark as unanswered’, indicating it has been marked as answered.

Marking a Topic as Unanswered:
If a user feels that the topic was marked as answered prematurely or if they require further clarification, they can click on the "Mark as Unanswered" button, which will replace the previous "Mark as Answered" button. 


Testing this feature:
We tested the "Marking topic as answered" feature by creating a new topic within the test environment. After posting the topic, we used the "Mark as Answered" button to flag it as resolved. We also checked the functionality of marking the topic back to "unanswered" and ensured that the button was changed accordingly. This test validates the functionality as it directly interacts with the database to update the topic's status.

The test can be found in the file located at : test/topics.js lines 401-408 and 1251-1255