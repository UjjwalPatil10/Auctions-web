import React from "react";

export const Checkbox = React.forwardRef(({ indeterminate, control, name, label, ...rest  }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
        <>
         <input type="checkbox" value={label} label={label} ref={resolvedRef} {...rest} />
         <label htmlFor={name}>{label}</label>
        </>
    )
})


// ===================================================================================




// import React from 'react';

// function Checkbox({ control, name, label, ...rest }) {
//   return (
//     <div>
//       <input
//         type="checkbox"
//         id={name}
//         name={name}
//         checked={/* handle checked state */}
//         {...rest}
//       />
//       <label htmlFor={name}>{label}</label>
//     </div>
//   );
// }

// export default Checkbox;