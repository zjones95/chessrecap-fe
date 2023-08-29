import { Typography, TypographyProps } from "@mui/material"
import { useSpring, animated } from "@react-spring/web"

interface TitleTextProps extends TypographyProps {
    animationDelay?: number
}

export const TitleText = ({
    children,
    animationDelay = 0,
    ...props
}: TitleTextProps) => {
    const [springs] = useSpring(() => ({
        from: {
            opacity: 0,
            y: 100,
        },
        to: {
            opacity: 1,
            y: 0,
        },
        delay: animationDelay,
    }))

    return (
        <animated.div style={springs}>
            <Typography
                variant="h1"
                fontSize={{ xs: "3rem", md: "4rem", lg: "5rem" }}
                color="primary.main"
                {...props}
            >
                {children}
            </Typography>
        </animated.div>
    )
}
