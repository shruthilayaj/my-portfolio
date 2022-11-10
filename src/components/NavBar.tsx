import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { AboutMe } from "../views/AboutMe";
import { Projects } from "../views/Projects";

export function NavBar() {
	return (
		<Tabs>
			<TabList>
				<Tab>About Me</Tab>
				<Tab>Projects</Tab>
				<Tab>CV</Tab>
				<Tab>Contact</Tab>
			</TabList>

			<TabPanels>
				<TabPanel>
					<AboutMe />
				</TabPanel>
				<TabPanel>
					<Projects />
				</TabPanel>
				<TabPanel>
					<p>CV</p>
				</TabPanel>
				<TabPanel>
					<p>Contact</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
}