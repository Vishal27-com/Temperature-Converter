import React from "react";
import styles from "./Form.module.css";
const Form = ({ temp_input_setter, tempData, temp_converter }) => {
  return (
    <div>
      <form onSubmit={temp_converter} className={styles.tempForm}>
        <label>Current Temperature</label>
        <input
          type="number"
          name="curr_temp"
          required
          onChange={temp_input_setter}
        />
        <label>Current Unit</label>
        <select name="unit" onChange={temp_input_setter}>
          <option value="celsius">&deg;C</option>
          <option value="fahrenheit">&deg;F</option>
        </select>
        <div className={styles.convBut}>
          <input
            type="submit"
            value="Convert to &deg;C"
            disabled={tempData.unit === "celsius"}
          />
          <input
            type="submit"
            value="Convert to &deg;F"
            disabled={tempData.unit === "fahrenheit"}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
