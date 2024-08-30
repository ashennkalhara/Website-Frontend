import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Person, Assignment, AssignmentTurnedIn } from '@mui/icons-material';

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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderResponse = await axios.get('http://localhost:3000/api/payments/order-count');
                setOrderCounts(orderResponse.data);

                const staffResponse = await axios.get('http://localhost:3000/api/staff/staff-count');
                setStaffCount(staffResponse.data.total);

                const queryResponse = await axios.get('http://localhost:3000/api/queries/query-counts');
                setQueryCounts(queryResponse.data);
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

    return (
        <Box sx={{ padding: '2rem', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
            <Grid container spacing={3} sx={{ marginBottom: '2rem' }}>
                {/* Order Counts */}
                <Grid item xs={12} sm={4}>
                    <Card
                        sx={{
                            boxShadow: 4,
                            borderRadius: '16px',
                            background: 'linear-gradient(45deg, #FF6F61, #FFBB28)',
                            color: '#fff',
                        }}
                    >
                        <CardContent>
                            <AssignmentTurnedIn fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h5" align="center">
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
                        }}
                    >
                        <CardContent>
                            <Assignment fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h5" align="center">
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
                        }}
                    >
                        <CardContent>
                            <AssignmentTurnedIn fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h5" align="center">
                                Ready Orders
                            </Typography>
                            <Typography variant="h4" align="center" fontWeight="bold">
                                {orderCounts.ready}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Staff Count */}
                <Grid item xs={12}>
                    <Card
                        sx={{
                            boxShadow: 4,
                            borderRadius: '16px',
                            background: 'linear-gradient(45deg, #0088FE, #88B04B)',
                            color: '#fff',
                        }}
                    >
                        <CardContent>
                            <Person fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h5" align="center">
                                Total Staff Members
                            </Typography>
                            <Typography variant="h4" align="center" fontWeight="bold">
                                {staffCount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Query Counts */}
                <Grid item xs={12}>
                    <Card
                        sx={{
                            boxShadow: 4,
                            borderRadius: '16px',
                            background: 'linear-gradient(45deg, #FF6F61, #0088FE)',
                            color: '#fff',
                        }}
                    >
                        <CardContent>
                            <Assignment fontSize="large" sx={{ marginBottom: '0.5rem' }} />
                            <Typography variant="h5" align="center">
                                Queries Breakdown
                            </Typography>
                            <Typography variant="h4" align="center" fontWeight="bold">
                                Replied: {queryCounts.repliedCount} | Pending: {queryCounts.pendingCount}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Pie Chart for Orders */}
            <Card sx={{ padding: '2rem', boxShadow: 4, borderRadius: '16px', marginBottom: '2rem' }}>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        Orders Breakdown
                    </Typography>
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>
                            <Pie
                                data={orderData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {orderData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </Box>
    );
};

export default AdminDashboard;
