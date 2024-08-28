import { useEffect } from "react";
import Chart from "chart.js/auto";

const skills = [
  { id: "html5", label: "HTML5", percentage: 35 },
  { id: "css3", label: "CSS3", percentage: 12 },
  { id: "JavaScript", label: "JavaScript", percentage: 49 },
  { id: "ReactJs", label: "ReactJs", percentage: 82 },
  { id: "NextJs", label: "NextJs", percentage: 60 },
  { id: "PostGres", label: "PostGres", percentage: 50 },
  { id: "Express", label: "Express", percentage: 33 },
  { id: "NestJs", label: "NestJs", percentage: 25 },
];

const lineChartData = [
  { id: "html5_css3", label: "HTML5/CSS3", percentage: 95 },
  { id: "Design", label: "Design", percentage: 100 },
  { id: "WordPress90", label: "WordPress", percentage: 90 },
  { id: "PHP", label: "PHP", percentage: 80 },
  { id: "Java", label: "Java", percentage: 75 },
  { id: "Javascript", label: "Javascript", percentage: 60 },
  // Add more data here if needed
];

export default function Skills() {
  useEffect(() => {
    const charts = [];

    skills.forEach((skill) => {
      const ctx = document.getElementById(skill.id).getContext("2d");

      if (Chart.getChart(skill.id)) {
        Chart.getChart(skill.id).destroy();
      }

      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: [skill.percentage, 100 - skill.percentage],
              backgroundColor: ["#FFA500", "#e0e0e0"],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: "75%",
          responsive: false,
          plugins: {
            tooltip: { enabled: false },
          },
        },
      });

      charts.push(chart);
    });

    lineChartData.forEach((data) => {
      const ctx = document.getElementById(data.id).getContext("2d");

      if (Chart.getChart(data.id)) {
        Chart.getChart(data.id).destroy();
      }

      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [data.label],
          datasets: [
            {
              label: `${data.percentage}%`,
              data: [data.percentage],
              backgroundColor: "#FFA500",
            },
          ],
        },
        options: {
          indexAxis: "y",
          scales: {
            x: {
              max: 100,
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: { enabled: true },
          },
        },
      });

      charts.push(chart);
    });

    return () => {
      charts.forEach((chart) => chart.destroy());
    };
  }, []);

  return (
    <section className="py-28 clear-both font">
      <div className="mx-auto px-4 w-full max-w-5xl text-center font-mono">
        <div className="text-center leading-[1.5] font-normal text-4xl text-black mb-32">
          <h1>Skills</h1>
        </div>

        <div className="flex flex-wrap justify-center items-center">
          {skills.map((skill) => (
            <div
              className="w-1/4 px-5 text-center flex flex-col justify-center items-center mb-5 relative"
              key={skill.id}
            >
              <div className="w-40 h-40 mx-auto mb-5 relative">
                <canvas id={skill.id} width="160" height="160"></canvas>
              </div>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-normal text-black">
                <strong>{skill.label}</strong> <br /> {skill.percentage}%
              </span>
            </div>
          ))}
          <div className="grid grid-cols-2 gap-5 w-full mt-5 p-5">
            {lineChartData.map((data) => (
              <div className="p-5 mb-2" key={data.id}>
                <div className="flex justify-between mb-2">
                  <p className="font-normal">{data.label}</p>
                  <p className="font-normal">{data.percentage}%</p>
                </div>
                <div className="w-full h-[3px] bg-gray-100">
                  <canvas id={data.id} width="300" height="40"></canvas>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
