import React from 'react';
import TextField from '@material-ui/core/TextField';


const CustomInputField = (props) => {
    const { label, placeholder, value,disabled, onChange, id } = props;
    return (
        <div style={styles.wrapper}>         
        <TextField
            label= {label}
            placeholder={placeholder}
            fullWidth
            InputProps={{
                disableUnderline: true
            }}
            value={value}
            disabled={ disabled}
            // variant='outlined'
            style={{
                // marginLeft: '0px',
                borderRadius: '0px',
                margin:'1.75%'
            }}
            onChange={(event) => onChange && onChange(id, event.target.value)}
            // onChange={(e) => {
            //     setName(e.target.value);
            // }}
        />
    </div>)
};

export default CustomInputField;

const styles = {
    wrapper: {
        height:'70px',
        flexDirection:'column' ,
        alignItems:'center',
        // marginTop:'5%', 
        // marginBottom:'5%',  
        // backgroundColor:'yellow',
        border: '1px solid rgba(0, 0, 0, 0.2)',
    },
};