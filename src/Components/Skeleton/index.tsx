import {Container} from './style'

type Props = {
    width: number | string;
    height: number | string;
    borderRadius?: number;
    marginBottom: number;
}

function Skeleton({width, height, borderRadius, marginBottom} : Props){
    return(
        <Container style={{width, height, borderRadius, marginBottom}} />
    )
}

export default Skeleton