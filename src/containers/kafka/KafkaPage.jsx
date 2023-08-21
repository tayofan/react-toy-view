import React from "react";
import KafkaTopicList from "../../components/kafka/KafkaTopicList";

const KafkaPage = () => {
    return (
        <div className="card">
            <KafkaTopicList/>
            <div className="card-body">내용</div>
        </div>
    );
}

export default KafkaPage;