import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
import './PageLoading.css';

export default function PageLoading() {
    return (
        <Container fluid style={{ height: "100vh" }}>
            < Spinner bsPrefix="page-loader" animation="border" />
        </Container>
    )
}