import "../projects/page.scss"
import Calculator from "@/components/calculator/calculator";

export default function projectsPage() {
	return(
		<>
			<div className="ap-projects-header">
				<h1>My Projects</h1>
			</div>
			<div className="ap-projects">
				<div className="ap-calculator">
					<Calculator />
				</div>
			</div>
		</>
	)
}