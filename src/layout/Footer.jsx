import React from 'react'
import Container from '../components/Container'

export default function Footer() {
    const date = new Date();
  return (
    <footer className="w-full bg-dark-bg text-white text-center py-5">
        <Container>
            <p className="text-sm font-bold"> women in tech &copy; {date.getFullYear()}</p>
        </Container>
    </footer>
  )
}
