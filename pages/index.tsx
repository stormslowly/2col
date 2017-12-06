import Link from 'next/link'
import * as React from 'react'

class TwoColumn extends React.Component {


    render() {
        return '2col'
    }
}

type ToCompare = { left: string, right: string }

const Compare: React.StatelessComponent<ToCompare> = ({left, right}: ToCompare) => {
    return <div className="flex">
        <div>{left}</div>
        <div>{right}</div>
    </div>
}


export default () =>
    <div>
        let's do it
        <Link href="/about">
            <a>About</a>
        </Link>

        <div style={{width:'800px', border:'1px solid black'}}>
            <Compare left={'text'} right={'test'}/>
        </div>
    </div>




