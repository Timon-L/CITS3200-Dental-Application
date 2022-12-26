export default infodata = {
	topics: [
	{
		name: "Oral Health Conditions",
		content: "When we talk about 'oral health', the concept can get a bit vague. It refers to the overall health of the teeth, gums, and entire oral-facial system.",
		content2: "A few common conditions that fall under the umbrella of 'oral health' are Cavities, Gum Disease (periodontal disease), Plaque Buildup and Oral Cancer. (Did you know that over 80% of people will have at least one cavity by age 34?)",
		content3: "So now we know what oral health is and what conditions can affect it, why do we care? \n It's a common assumption that oral conditions are separate from other chronic conditions, but they can be dependent on each other. Poor Oral Health can lead to serious diseases like diabetes and heart disease."
	},
	{
		name: "Cavities",
		content: "Cavities are an extremely common oral health condition with minor, but not insignificant effects. They are caused by a breakdown of the tooth enamel (the hard surface layer of the teeth) due to acids produced by bacteria. These bacteria are mainly located in plaque or food that collects on the teeth.",
		content2: "There's a good chance that you've had Cavities at some point in your lifetime, no matter your age. Did you know that more than half of children age 8 have had at least one cavity in their baby teeth? But it's certainly not just kids, as more than 90% of adults have had at least one cavity in their lifetime."
	},
	{
		name: "Plaque",
		content: "Plaque is another very common oral health condition, which is actually present in everyone's mouth, to some degree. Plaque takes the form of a sticky film of bacteria that forms on teeth over time, which feed on the things you eat or drink.",
		content2: "The acids created by these bacteria can eventually cause long term damage to your teeth, if left unchecked. (Cavities, Gingivitis, Gum Infection and more.) Fortunately, there's an extremely easy, foolproof way to prevent plaque buildup.\n\n Just brush your teeth! Brushing twice a day reduces plaque buildup to neglegible levels."
	},
	{
		name: "Gingivitis",
		content: "Next up on our list of everyday oral health conditions is Gingivitis, a kind of gum disease (also called periodontal disease) that can cause moderate discomfort if left untreated. Gingivitis is caused by poor oral hygiene and the buildup of plaque, which irritates the gums and can even make them bleed.",
		content2: "The key way to prevent Gingivitis is to limit the buildup of plaque and tartar (a hardened byproduct of plaque) on your teeth. Plaque can be removed with regular brushing, but tartar is tougher and regular cleaning at a dentist is recommended. (6-12 months between visits is a safe bet.) "
	},
	{
		name: "Contact Us",
		content: "This app was made by\n \nDanish Hilmann Azman\nJonathan Davey\nJoel Wildman\nMatthew Mandzufas\nChing Chun Lui\nMichael Shi\n\n for Dr Yulianna Shiikha, and released under the Creative Commons (Open Source) Licence.",
		content2: "You can find us online at ________"
	}
	]	
}

export function getInfoData() {
	const NUM_TOPICS = 5;
	let topics = [];

	Object.keys(infodata).forEach((topic)=>topics.push(...infodata[topic]));
	return topics;
}