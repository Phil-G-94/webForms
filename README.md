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

### HTML5 input types
- Search fields || type="search"
- Phone number field || type="tel"
- URL field || type="url"
- Numeric field || type="number"
- Slider controls || type="range"
- Date and time pickers || type="datetime-local" ; type="month" ; type="time" ; type="week"
  - Date/time controls can be constrained using *min* *max* attributes. We can add in *step* to additionally constrain input.   
- Color picker control || type="color" 

### Other form controls
- Multi-line text fields || <textarea></textarea>
- Drop-down controls || <select> & <option>
- Meters and progress bars || <progress>

### Styling Web Forms
- Some form widgets more difficult to style than others. See [link](https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms#styling_simple_form_widgets)

- Fonts and text: to make forms' appearance consistent with rest of content, you can use 
  ```
  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
  }
  ```

- Box sizing: each widget has its own rules for border, padding and margin. Use the following to give the same size to several different widgets
```
input,
textarea,
select,
button {
  width: 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
```

- Legend placement: by default, it's always position over the top border of its <fieldset> parent, near the top left corner
  We can position it somewhere else by using the *position* CSS property

  ```
  fieldset {
    position: relative;
  }

  legend {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  ```

### Advanced Form Styling 

- appearance: none; || using the *appearance* property to control OS-level styling. Checkbox and radio button custom styles: see advancedFormStyling directory. 
- Styling difficult controls like type="color" || ="datetime-local" etc... || <progress>, <meter>, <select>, <input> ...any dropdown menu...
- see advancedFormStyling directory for examples

### UI Pseudo Classes

- Useful pseudo-classes [here](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes#what_pseudo-classes_do_we_have_available)
  - :hover, :active, :focus, :required, :optional, .
  - need to use 'required' <html> attribute on :required inputs for client-side validation purposes. see pseudoDemo/pseudo-required.html.
  - ::before || ::after pseudo-elements for generated content. usually contained in empty <span> elements see pseudoDemo/out-of-range.html.
  - :enabled :disabled || see pseudoDemo/enabled-disabled. 
  - :read-only and :read-write || see pseudoDemo/readonly-readwrite.
  - :checked, :default, :indeterminate. Radio and checkbox states. --> think about custom radio/checkbox styling in advanced-form-styling1.html. 
    Examples 
    - :checked examplein advanced-form-styling.html,
    - [:default example](https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-default.html) and,
    - [:indeterminate]()https://mdn.github.io/learning-area/html/forms/pseudo-classes/radios-checked-indeterminate.html

  - [Other pseudo classes](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes#more_pseudo-classes)
  - Skill tests on codepen.

### Client-side form validation

- Why? 
  - Initial check to avoid sending incorrect data to the server, causing issues with server response. 
  - Complemented by server side validation. 
- Different types of client-side validation
  - Built-in form validation | HTML | has better performance than JS, but not that customizable
  - JS validation is coded using JavaScript. Validation is completely customisable, but you to create it all || use a library.

- Built-in form validation
  - required | minlength, maxlength | min, max | type | pattern (regex)
  - when it adheres to any of the above, it is valid, and as such is matched by the :valid CSS pseudo-class for styling purposes.
  - when it doesn't, it is invalid, and is matched by :invalid CSS pseudo-class for styling purposes. 
  - Constraint validation reference [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#validation-related_attributes)
  
- Validating forms using JS
  - Using the Constraint Validation API for more complex constraints. Reference [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation#complex_constraints_using_the_constraint_validation_api)

  - Makes several additional properties and methods available on ` <button>, <fieldset>, <input>, <output>, <select>, <textarea> ` and the ` <form> ` elements. 

  - Built-in HTML validation features can't be easily styled with CSS; they also depend on browser's locale, so may be in a different language than the language used on the page. Customising these features is one of the most common uses of the Constraint Validation API.

  - simple-example.html | using  .validity.typeMismatch properties and the setCustomValidity() method of the CV API. 

- Skill tests - see codepens:
  - [1](https://codepen.io/_Recurs1ion/pen/jOvMWPw)
  - [2](https://codepen.io/_Recurs1ion/details/MWqjKNZ)
  - [3](https://codepen.io/_Recurs1ion/details/JjaRNMR) 


### Sending Form Data 

1) HTML forms as a convenient user-friendly way to configure an HTTP request to send data to a server (web servers like Apache, Nginx, IIS, Tomcat etc.). Data is sent using the HTTP protocol.

  - **HTTP requests** include two parts; 
  a *header* that contains a set of global metadata about the browser's capabilities,
  and a *body* that can contain information necessary for the server to process the specific request.

2) `<form>` defines how data is sent. *action* and *method* attributes. 
  
  - **action** defines *where* the data is sent. Its value must be an absolute or relative URL, otherwise it will be sent to the URL of the page that contains the form. 
  
  If URL specified uses HTTP protocol, data is encrypted - even if origin URL isn't HTTPS. If vice versa, all browsers display a warning that data sent may not be encrypted. 

  Data is sent in **name=value** pairs separated by ampersands.

  **action** value should be a file on the server that can handle the incoming data, including ensuring server-side validation. 

  - **method** defines *how* data is sent. 

  **HTTP protocol** provides the **GET** and **POST** methods. 

  **GET** is used by the browsers to ask the server to send back a given resource.
  It appends the values in the form to the end of the URL, i.e. http://foo.com/**?say=Hi&to=Mom**, once the request has been made. 

  **POST** method is used to communicate to the server and have it send back a response based on the data in the body of the HTTP request. Using this methods appends the data to the body of the HTTP request, for example: 
  ```
    POST / HTTP/2.0
    Host: foo.com
    Content-Type: application/x-www-form-urlencoded
    Content-Length: 13
    say=Hi&to=Mom

  ```

  - Use Chrome Development Tools or similar to view HTTP requests in full. Especially POST.
  - Never use GET method to send passwords or other sensitive data
  - POST method preferred for large amounts of data as browsers/servers often limit URL length. 

#### Sending files: a special case...

- Files are considered binary data, whereas all other data is considered text data.
- This makes sending files with HTML forms a special case. Because HTTP is a text protocol, there are special requirements for handling binary data. 

  - Including the **enctype** attribute: needs to be done. Let's us specify value of Content-Type HTTP header included in request when form is submitted. ** Set its value to multipart/form-data"

  - Set the method to "POST"; file content can't be put inside URL parameters. 

  - Include one/more **input type="file"** to allows users to select the file(s) that will be uploaded. 

### Security Issues

- HTML forms => common server attack vectors. [Website Security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security) for more detail. 

- Simplified approach to web security: 
  - Escape potentially dangerous characters/such as JavaScript or SQL commands;
  - Limit the incoming amount of data to only what's necessary to process requests;
  - Sandbox uploaded files;

