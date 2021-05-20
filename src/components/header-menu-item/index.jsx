import styled from 'styled-components';
import Link from 'next/link';

const MenuItem = styled.a`
    color: black;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
`;

export default function HeaderMenuItem({ path, setOpen, current, title }) {
    return (
        <li style={{ margin: '1rem' }}>
            <Link href={path}>
                <MenuItem onClick={() => setOpen(false)} selected={path === current}>
                    {title}
                </MenuItem>
            </Link>
        </li>
    );
}
