import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Person, Assignment, AssignmentTurnedIn, Download } from '@mui/icons-material';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const COLORS = ['#FF6F61', '#6B5B95', '#88B04B', '#FFBB28'];

const AdminDashboard = () => {
    const [orderCounts, setOrderCounts] = useState({
        pending: 0,
        confirmed: 0,
        ready: 0,
        total: 0,
    });

    const [staffCount, setStaffCount] = useState(0);
    const [queryCounts, setQueryCounts] = useState({
        repliedCount: 0,
        pendingCount: 0,
    });
    const [resCounts, setResCounts] = useState({
        acceptedCount: 0,
        rejectedCount: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderResponse = await axios.get('http://localhost:3000/api/payments/order-count');
                setOrderCounts(orderResponse.data);

                const staffResponse = await axios.get('http://localhost:3000/api/staff/staff-count');
                setStaffCount(staffResponse.data.total);

                const queryResponse = await axios.get('http://localhost:3000/api/queries/query-counts');
                setQueryCounts(queryResponse.data);

                const resResponse = await axios.get('http://localhost:3000/api/reservations/reservation-counts');
                setResCounts(resResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);

    const orderData = [
        { name: 'Pending', value: orderCounts.pending },
        { name: 'Confirmed', value: orderCounts.confirmed },
        { name: 'Ready', value: orderCounts.ready },
    ];

    const queryData = [
        { name: 'Replied Queries', value: queryCounts.repliedCount },
        { name: 'Pending Queries', value: queryCounts.pendingCount },
    ];

    const reservationData = [
        { name: 'Accepted Reservations', value: resCounts.acceptedCount },
        { name: 'Rejected Reservations', value: resCounts.rejectedCount },
    ];

    const handleDownloadPdf = () => {
        const doc = new jsPDF();
    
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0]; 
    
        doc.setFontSize(18);
        doc.text(`The Heritage Grill Admin Summary Report - ${formattedDate}`, 14, 22);

        doc.setFontSize(14);
        doc.text('Orders Summary', 14, 40);
        doc.autoTable({
            startY: 45,
            head: [['Pending', 'Confirmed', 'Ready', 'Total']],
            body: [
                [orderCounts.pending, orderCounts.confirmed, orderCounts.ready, orderCounts.total],
            ],
        });

        doc.text('Staff Summary', 14, doc.autoTable.previous.finalY + 10);
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 15,
            head: [['Total Staff']],
            body: [[staffCount]],
        });

        doc.text('Queries Summary', 14, doc.autoTable.previous.finalY + 10);
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 15,
            head: [['Replied Queries', 'Pending Queries']],
            body: [
                [queryCounts.repliedCount, queryCounts.pendingCount],
            ],
        });

        doc.text('Reservations Summary', 14, doc.autoTable.previous.finalY + 10);
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 15,
            head: [['Accepted Reservations', 'Rejected Reservations']],
            body: [
                [resCounts.acceptedCount, resCounts.rejectedCount],
            ],
        });

        doc.save('dashboard_summary.pdf');
    };

    return (
        <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<Download />}
                onClick={handleDownloadPdf}
                sx={{ marginBottom: '1rem' }}
            >
                Download PDF
            </Button>

            <Grid container spacing={2}>
                {/* Order Counts */}
                <Grid item xs={12} sm={4}>
                    <Card
                        sx={{
                            boxShadow: 4,
                            borderRadius: '16px',
                            background: 'linear-gradient(45deg, #FF6F61, #FFBB28)',
                            color: '#fff',
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            <AssignmentTurnedIn fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h6" align="center">
                                Pending Orders
                            </Typography>
                            <Typography variant="h4" align="center" fontWeight="bold">
                                {orderCounts.pending}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card
                        sx={{
                            boxShadow: 4,
                            borderRadius: '16px',
                            background: 'linear-gradient(45deg, #6B5B95, #FF6F61)',
                            color: '#fff',
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            <Assignment fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h6" align="center">
                                Confirmed Orders
                            </Typography>
                            <Typography variant="h4" align="center" fontWeight="bold">
                                {orderCounts.confirmed}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card
                        sx={{
                            boxShadow: 4,
                            borderRadius: '16px',
                            background: 'linear-gradient(45deg, #88B04B, #6B5B95)',
                            color: '#fff',
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            <AssignmentTurnedIn fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h6" align="center">
                                Ready Orders
                            </Typography>
                            <Typography variant="h4" align="center" fontWeight="bold">
                                {orderCounts.ready}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Staff Count */}
                <Grid item xs={12} sm={4}>
                    <Card
                        sx={{
                            boxShadow: 4,
                            borderRadius: '16px',
                            background: 'linear-gradient(45deg, #0088FE, #88B04B)',
                            color: '#fff',
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            <Person fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h6" align="center">
                                Total Staff Members
                            </Typography>
                            <Typography variant="h4" align="center" fontWeight="bold">
                                {staffCount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Query Counts */}
                <Grid item xs={12} sm={4}>
                    <Card
                        sx={{
                            boxShadow: 4,
                            borderRadius: '16px',
                            background: 'linear-gradient(45deg, #FF6F61, #0088FE)',
                            color: '#fff',
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            <Assignment fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h6" align="center">
                                Queries Breakdown
                            </Typography>
                            <Typography variant="h5" align="center" fontWeight="bold">
                                Replied: {queryCounts.repliedCount} | Pending: {queryCounts.pendingCount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Pie Charts */}
                <Grid item xs={12} sm={6}>
                    <Card sx={{ padding: '1rem', boxShadow: 4, borderRadius: '16px' }}>
                        <CardContent>
                            <Typography variant="h6" align="center" gutterBottom>
                                Orders Breakdown
                            </Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={orderData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={120}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {orderData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card sx={{ padding: '1rem', boxShadow: 4, borderRadius: '16px' }}>
                        <CardContent>
                            <Typography variant="h6" align="center" gutterBottom>
                                Queries Breakdown
                            </Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={queryData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={120}
                                        fill="#82ca9d"
                                        dataKey="value"
                                    >
                                        {queryData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Card sx={{ padding: '1rem', boxShadow: 4, borderRadius: '16px' }}>
                        <CardContent>
                            <Typography variant="h6" align="center" gutterBottom>
                                Reservations Breakdown
                            </Typography>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={reservationData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={false}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={120}
                                        fill="#ffc658"
                                        dataKey="value"
                                    >
                                        {reservationData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AdminDashboard;
