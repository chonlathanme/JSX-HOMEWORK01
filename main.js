function Page() {
    return (
        <div style={{width: '100vw', height: '100vh', backgroundColor: 'gray', display: 'flex', justifyContent: 'center'}}>
            <App />
        </div>
    )
}
function App() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '400px', height: '300px', backgroundColor: 'white', margin: '20px', padding: '8px', border: '1px solid black', borderRadius: '16px', justifyContent: 'center'}}>
            <Photo />
            <Info />
            <Detail />
        </div>
    )
}
function Photo() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px'}}>
            <img style={{width: '120px', height: '120px', borderRadius: '50%', display: 'flex'}}src="https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" alt="" />
        </div>
    )
}
function Info() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p>Julienne Moore</p>
            <p style={{color: 'gray'}}>julienne.moore@company.com</p>
        </div>
    )
}
function Detail() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', margin: '20px'}}>
            <div style={{width: '33%'}}>
                <h4>25</h4>
                <p>Posts</p>
            </div>
            <div style={{width: '33%'}}>
                <h4>350</h4>
                <p>Following</p>
            </div>
            <div style={{width: '33%'}}>
                <h4>1.5K</h4>
                <p>Following</p>
            </div>
        </div>
    )
}





ReactDOM.createRoot(document.querySelector('#root'))
    .render(<Page />)