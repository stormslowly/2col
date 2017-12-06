"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = require("next/link");
const React = require("react");
class TwoColumn extends React.Component {
    render() {
        return '2col';
    }
}
//      style={{overflowWrap: "break-word"}}
const Compare = ({ left, right }) => {
    return <div className="flex border-b-2">
        <div className="w-1/2">{left}</div>
        <div className="w-1/2">
            <p style={{ overflowWrap: "break-word" }}>
                {right}
            </p>
        </div>
    </div>;
};
exports.default = () => <div>
        let's do it
        <link_1.default href="/about">
            <a>About</a>
        </link_1.default>
        <h1>开始对比</h1>
        <div className="container mx-auto border-l-2 border-r-2">
            <Compare left={'npm init'} right={'maven stat'}/>
            <h2>一些描述</h2>
            <p className="">
                some description
            </p>
        </div>
    </div>;
