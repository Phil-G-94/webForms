# webForms

## Useful Resources 

- [Smashing Magazine](https://www.smashingmagazine.com/)
- [UX matters](https://www.uxmatters.com/)

### Basic Native Form Controls 

- Share some common behaviours, they can contain the following attributes:
  - *readonly* : user can't modify value but info still sent along with rest of the form
  - *disabled* : input value can't be modified and is never sent along with rest of form data
  - *placeholder* text
  - *size* : limits the physical size of the box
  - *maxlength* : limits max number of chars that can be entered into box
  - *spellcheck* : allows form  to benefit from spellchecking if the browser supports it

- The ``` <input> ``` element can take different shapes depending on its *type* attribute value.
It is used for creating most types of form widgets. 

- Single line text fields : inputs who's type="text" or inputs w/o a type attribute. Default is set to *text*

- Passwords : inputs who's type="password". Obscures password values with asterisks or dots. This is only a user interface feature; if form is not sent over HTTPS (i.e. in plain HTTP) passwords will be sent over in plain text. See [Insecure Passwords](https://developer.mozilla.org/en-US/docs/Web/Security/Insecure_passwords) for more info. 

- Hidden Content : input type="hidden". Often used for timestamps, for example:

```
<input type="hidden" id="timestamp" name="timestamp" value="1286705410" />
```
...user cannot see/edit value; it will be ignored by screen readers, and will receive no focus

-  Checkable items: checkboxes and radio buttons
  - Surround each list of related items in <fieldset> , with a <legend> providing an overall description of the list
  - The associated <label> is generally placed immediately before or after the radio button or checkbox, with the instructions for the group of radio button or checkboxes generally being the content of the <legend>.
  - the *checked* attribute
  - radio buttons can be tied together; if they share the same value in their name attribute they will be considered to be in the same group of buttons. only one button checked at a time. 
  - 3 input types that produce buttons:
    - *submit* sends data to server
    - *reset* resets all form widgets to default values
    - *button* buttons that have no automatic effect but can be customised using JavaScript
    - *image* input type also renders as a button. See image buttons. 

- <button> element itself.