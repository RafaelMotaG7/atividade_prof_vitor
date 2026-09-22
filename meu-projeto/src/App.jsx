import ElectricBorder from "./components/ElectricBorder";
function App() {
return (
<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh'
}}>
<ElectricBorder
color="#e61515"
speed={2}
chaos={0.5}
borderRadius={220}
>
<div style={{ padding: '40px', fontSize: '24px', color: 'white' }}>
Efeito Electric Border
</div>
</ElectricBorder>
</div>
)
}
export default App