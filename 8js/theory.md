Task
Create a field for entering a price with validation. The task must be implemented in javascript language, without using frameworks and a supporter of libraries (such as Jquery).

Technical requirements:

When the page loads, show the user an (input) field labeled  Price. This field will be used to enter numeric values
The behavior of the field should be as follows:

When focusing on an input field, it should have a green frame. When the focus is lost, it disappears.
When the focus is removed from the field, its value is read, a span is created above the field, in which the text should be displayed: Current price: $ {value from the input field}. There should be a button with a cross (X) next to it. The value inside the input field turns green.
When you click on the X - the span with the text and the X button should be removed. The value entered in the input field is cleared.
If the user entered a number less than 0 - when the focus is lost, highlight the input field with a red frame, display the phrase - Please enter correct price under the field. span with a value is not created.


The img folder contains examples of the implementation of the input field and the span being created.
