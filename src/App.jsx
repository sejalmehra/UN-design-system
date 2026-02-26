import Badge from './components/Badge/Badge';
import Header from './components/Header/Header';
import Button from './components/Button/Button';

import IconLibrary from './components/IconLibrary/IconLibrary';

function App() {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>

      {/* Introduction Banner */}
      <div style={{
        background: 'var(--color-primary-100, #0057B7)',
        padding: '2.5rem 3rem',
        borderBottom: '4px solid var(--color-primary-70, #009EDB)'
      }}>
        <h1 style={{ color: '#FAFAFA', fontSize: 32, fontWeight: 600, margin: 0 }}>
          United Nations Design System
        </h1>
        <p style={{ color: 'var(--color-primary-70, #009EDB)', fontSize: 16, margin: '8px 0 0' }}>
          Component library built for the UN digital ecosystem
        </p>
      </div>

      {/* Component Sections */}
      <div style={{ padding: '3rem' }}>

        {/* Header Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
            Header
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
            <div>
              <p style={{ margin: '0 0 0.5rem', fontSize: 12, color: '#6B7280' }}>Variant — Simple</p>
              <Header />
            </div>
            <div>
              <p style={{ margin: '0 0 0.5rem', fontSize: 12, color: '#6B7280' }}>Variant — Full</p>
              <Header showSearch showUtilities />
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
            Buttons
          </h2>
          <div>
              <p style={{ margin: '0 0 0.5rem', fontSize: 12, color: '#6B7280' }}>Variants - Primary, Secondary, Neutral </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Button label="Primary" variant="primary" />
                <Button label="Secondary" variant="secondary" />
                <Button label="Neutral" variant="neutral" />
              </div>
            </div>
      </section>

        {/* Icon Library Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
            Icon Library
          </h2>
          <div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <IconLibrary />
              </div>
            </div>
      </section>

        {/* Badge Section */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, borderBottom: '1px solid #E5E7EB', paddingBottom: '0.5rem' }}>
            Badge
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1rem' }}>
            <div>
              <p style={{ margin: '0 0 0.5rem', fontSize: 12, color: '#6B7280' }}>Variant — Default</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Badge label="1" />
                <Badge label="12" />
                <Badge label="99+" />
              </div>
            </div>

            <div>
              <p style={{ margin: '0 0 0.5rem', fontSize: 12, color: '#6B7280' }}>Variant — Disabled</p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Badge label="1" disabled />
                <Badge label="12" disabled />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default App;