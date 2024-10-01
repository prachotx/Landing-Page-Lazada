export default function Wrapper({ children }) {
    return (
        <div className="max-w-[1200px] mx-auto">
            {children}
        </div>
    )
}