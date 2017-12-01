"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("next/link");
const react_1 = require("react");
class TwoColumn extends react_1.Component {
    render() {
        return '2col';
    }
}
exports.default = () => <div>
        let's do it
        <link_1.default href="/about">
            <a>About</a>
        </link_1.default>

        <div>

            <TwoColumn>

            </TwoColumn>

        </div>
    </div>;
