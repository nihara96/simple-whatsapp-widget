# Simple WhatsApp Widget

Simple WhatsApp Widget is a lightweight and easy-to-use React component that allows you to add a WhatsApp chat widget to your web application.

## Installation

You can install the package using npm:

```shell
npm install simple-whatsapp-widget
```

or using yarn:

```shell
yarn add simple-whatsapp-widget
```

## Usage

```javascript
import React from "react";
import WhatsAppWidget from "simple-whatsapp-widget";

const Test = () => {
  return (
    <div>
      <WhatsAppWidget />
    </div>
  );
};

export default Test;
```

Simply import the WhatsAppWidget component and place it in your React component where you want the WhatsApp chat widget to appear.

## Customization

The WhatsAppWidget component accepts several optional props to customize its appearance and behavior. Here are the available props:

**phoneNumber**: Specify the phone number to which the WhatsApp messages should be sent. <br>
**autoOpen**: Set it to true to automatically open the WhatsApp chat widget when the component is mounted. <br>
**message**: Provide a pre-defined message that will be included in the initial WhatsApp message. <br>
**className**: Add custom CSS classes to the WhatsApp chat widget container.<br>

Example usage with props:

```javascript
<WhatsAppWidget
  phoneNumber="+1234567890"
  autoOpen={true}
  message="Hello, I have a question about your product."
  className="my-custom-widget"
/>
```

Feel free to modify and style the widget according to your application's needs.

## License

This package is licensed under the MIT License. See the LICENSE file for details.

## Contribution

Contributions are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue on the [GitHub repository](https://github.com/nihara96/simple-whatsapp-widget).

If you would like to contribute code, please follow the guidelines in the CONTRIBUTING file.

## Author

Nihara Mayurawasal <br>
GitHub: [nihara96](https://github.com/nihara96).
