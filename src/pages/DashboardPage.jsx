import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";   
import { Calendar } from "@/components/ui/calendar";
import { ChartRadialLabel } from "@/components/ui/ChartRadialLabel";
import { ChartLineDotsColors } from "@/components/ui/Chart3";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function DashboardPage() {
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
    }   

    const chartData = useSelector((state) => state.chart.chartData);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
                <Button onClick={handleLogout} variant="destructive">Logout</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Calendrier */}
                <Card>
                <CardContent className="p-4">
                    <h2 className="text-lg font-semibold mb-2">📅 Calendrier</h2>
                    <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
                </CardContent>
                </Card>
            

                <card>
                    <cardContent className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Activity Chart</h2>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={chartData}>
                                <XAxis dataKey="browser" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Line
                                type="monotone"
                                dataKey="visitors"
                                stroke="#8884d8"
                                dot={{ r: 5 }}
                                activeDot={{ r: 8 }}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </cardContent>
                </card>
                <ChartRadialLabel />
                <ChartLineDotsColors />
            </div>
        </div>
    );
}
