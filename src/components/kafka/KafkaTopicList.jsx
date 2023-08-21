import React from "react";
import SelectBox from "../common/SelectBox";

function KafkaTopicList({options, name, defaultValue, onChange}) {

    return (
        <div className="card-header">
            {/* <SelectBox
                name={name}
                options={options}
                defaultValue={defaultValue}
                onChange={onChange}
            /> */}
        </div>
    );
}

export default KafkaTopicList;