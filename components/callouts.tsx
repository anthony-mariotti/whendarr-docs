import { Link } from 'nextra-theme-docs';
import { Callout } from 'nextra/components';

export function WorkInProgress() {
    return (
        <Callout type={'warning'}>
            WORK IN PROGRESS - PAGE MAY BE INACCURATE
        </Callout>
    )
}

export function NotSupported() {
    return (
        <Callout type="error">
            Not Supported
        </Callout>
    )
}

export function PlannedFeature() {
    return (
        <Callout type="info">
            Not currently supported - <Link href="/roadmap" >View Roadmap</Link>
        </Callout>
    )
}