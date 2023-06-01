import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import Sidebar from "./Sidebar";
import MakePost from "./MakePost";

interface BodyProps {
    sidebar: boolean
    makepost: boolean
    children: JSX.Element|JSX.Element[]
}

export default function Body({ sidebar, makepost, children }: BodyProps) {

    return (
        <Container>
            <Stack direction='horizontal'>
                { sidebar && <Sidebar /> }
                <Container>
                    { makepost && <MakePost />}
                    { children }
                </Container>
            </Stack>
        </Container>

    )

}


