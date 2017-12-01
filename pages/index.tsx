import Link from 'next/link'
import React, {Component} from 'react'

class TwoColumn extends Component {


    render() {
        return '2col'
    }
}


export default () =>
    <div>
        let's do it
        <Link href="/about">
            <a>About</a>
        </Link>

        <div>

            <TwoColumn>

            </TwoColumn>

        </div>
    </div>


