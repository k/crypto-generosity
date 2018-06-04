/* @flow */

import * as React from "react";
import { AutoForm, AutoField, SubmitField } from "uniforms-antd";
import SimpleSchema from "simpl-schema";
import { isAddress, toChecksumAddress } from "web3-utils";

type GenerosityFormProps = {
    onSubmit: (model: { address: string }) => any,
};

const schema = new SimpleSchema({
    address: {
        type: String,
        custom: function() {
            if (!isAddress(this.value)) {
                return 'Not a valid ETH address';
            }
            return undefined;
        }
    },
});

export const GenerosityForm = ({
    onSubmit
}: GenerosityFormProps): React.Node => {
    return (
        <AutoForm onSubmit={onSubmit} schema={schema}>
            <AutoField
                name="address"
                placeholder="0x123456790abaB3A6e1400e9345bC60c78a8BEf57"
            />
            <SubmitField value="Give" />
        </AutoForm>
    );
};
