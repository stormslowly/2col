import Link from 'next/link'
import * as React from 'react'

class TwoColumn extends React.Component {


    render() {
        return '2col'
    }
}

type ToCompare = { left: string, right: string }
//      style={{overflowWrap: "break-word"}}

const Compare: React.StatelessComponent<ToCompare> = ({left, right}: ToCompare) => {
    return <div className="flex border-b-2">
        <div className="w-1/2">{left}</div>
        <div className="w-1/2">
            <p style={{overflowWrap: "break-word"}}>
                {right}
            </p>
        </div>
    </div>
}


export default () =>
    <div>
        let's do it
        <Link href="/about">
            <a>About</a>
        </Link>
        <h1>开始对比</h1>
        <div className="container mx-auto border-l-2 border-r-2" >
            <Compare left={'npm init'} right={'maven stat'}/>
            <h2>一些描述</h2>
            <p className="">
                some description
            </p>
        </div>
    </div>




