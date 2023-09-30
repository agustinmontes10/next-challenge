import { X } from "@phosphor-icons/react";
import React from "react";

const Error = () => {

    return (
        <div className="d-flex flex-column align-items-center">
            <X size={140} color="red" weight="bold" />
            <h4>Ha ocurrido un error</h4>
        </div>
    );
};

export default Error;
