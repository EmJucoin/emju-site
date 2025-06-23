import React from 'react';

export default function EmJuPage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#fff', color: '#000' }}>
      <h1 style={{ fontSize: '2rem' }}>Welcome to EmJu (MJU)</h1>
      <p>EmJu는 이더리움 기반의 투자용 암호화폐입니다.</p>
      <p>총 발행량: 100,000,000 MJU</p>
      <p>심볼: <strong>MJU</strong></p>

      <a href="/whitepaper" target="_blank" rel="noopener noreferrer">
        <button style={{
          marginTop: '1.5rem',
          padding: '0.8rem 1.5rem',
          fontSize: '1rem',
          borderRadius: '8px',
          border: '2px solid #000',
          background: 'transparent',
          color: '#000',
          cursor: 'pointer'
        }}>
          📄 EmJu 백서 보기
        </button>
      </a>
    </main>
  );
}