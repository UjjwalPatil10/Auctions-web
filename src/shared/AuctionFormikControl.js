import React from 'react';
import AuctionInput from './AuctionInput';
import AuctionChakraInput from './AuctionChakraInput';
import AuctionRadioButtons from './AuctionRadioButtons';
import AuctionSelect from './AuctionSelect';
// import CheckboxGroup from './CheckboxGroup';
import { Checkbox } from './FormCheckBox';
import TextArea from './TextArea';

function AuctionFormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <AuctionInput {...rest} />;
    case 'select':
      return <AuctionSelect {...rest} />;
    case 'radio':
      return <AuctionRadioButtons {...rest} />;
      case 'chakraInput':
        return <AuctionChakraInput {...rest} />;

        // case 'checkbox':
        //   return <CheckboxGroup {...rest} />;

               case 'checkbox':
          return <Checkbox {...rest} />;

          case 'textarea':
            return <TextArea {...rest} />;
         
    default:
      return null;
  }
}

export default AuctionFormikControl;

// ==================================================================================
