import React from 'react';
import { IfxMultiselect } from '@infineon/infineon-design-system-react';

function Spinner() {
  return (
    <div>
      <IfxMultiselect options="[{&quot;value&quot;:&quot;a&quot;,&quot;label&quot;:&quot;option a&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;b&quot;,&quot;label&quot;:&quot;option b&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c&quot;,&quot;label&quot;:&quot;option c&quot;,&quot;selected&quot;:false,&quot;children&quot;:[{&quot;value&quot;:&quot;c1&quot;,&quot;label&quot;:&quot;option c1&quot;,&quot;selected&quot;:false},{&quot;value&quot;:&quot;c2&quot;,&quot;label&quot;:&quot;option c2&quot;,&quot;selected&quot;:false}]}]"
        size="medium (40px)" error="false" error-message="Some error" label="" disabled="false"></IfxMultiselect>
    </div>
  )
}

export default Spinner;


