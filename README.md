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