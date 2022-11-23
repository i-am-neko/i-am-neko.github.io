var projects = document.getElementsByClassName("project");
const all_projects = document.getElementsByClassName("project");

var tag_div = document.getElementById("tags")

var tags = []

for (let project = 0; project < projects.length; project++) {
	var tagger = projects[project].getAttribute("class").split(" ");
	for (var tag = 0; tag < tagger.length; tag++) {
		if (tags.includes(tagger[tag])) {
		} else {
			console.log(projects[project].getAttribute("class").split(" ")[tag])
			tags.push(tagger[tag])
			
		}
		
	}
}

tags.sort()

for (var tag = 0; tag < tags.length; tag++) {
	var p = document.createElement("button");
	p.textContent = tags[tag];
	tag_div.append(p)
}


