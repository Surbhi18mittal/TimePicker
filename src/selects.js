
import React from "react";
class Selects extends React.Component {
	state = {
		starthour: 0,
		startmin: 0,
		endhour: 0,
		endmin: 0,
		hoursArray: [],
		minArray: []
	}

	componentDidMount() {
		this.createHoursMinsArray()
	}
	createHoursMinsArray = () => {
		let hoursArray = []
		for (let i = 0; i < 24; i++) {
			hoursArray.push({ value: i, disabled: false })
		}
		let minArray = []
		for (let i = 0; i < 60; i++) {
			minArray.push({ value: i, disabled: false })
		}


		this.setState({
			hoursArray,
			minArray
		})
	}
	onChangeHandler = (e) => {
		let value = parseInt(e.target.value),
			i,
			id = e.target.id,
			hoursArray = [...this.state.hoursArray],
			minArray = [...this.state.minArray]
		if (id === "starthour") {
			console.log("condition working")
			for (i = 0; i < 24; i++) {
				hoursArray[i].disabled = false
				if (i < value)
					hoursArray[i].disabled = true
			}

		}
		if (id === "startmin") {
			console.log("condition working")
			if (value === 59 && this.state.starthour < 23) {
				for (i = 0; i < 24; i++) {
					// minArray[i].disabled = false
					hoursArray[i].disabled = false
					if (i <= this.state.starthour)
						hoursArray[i].disabled = true
				}
				for (i = 0; i < 60; i++) {
					minArray[i].disabled = false
				}

			}
			else if (value === 59 && this.state.starthour === 23) {
				alert("Starting minutes can only be till 58 at EOD.")
				// minArray[59].disabled = true
				return
			}
			else {
				for (i = 0; i < 60; i++) {
					// hoursArray[i].disabled = false
					minArray[i].disabled = false
					if (i <= value) {
						minArray[i].disabled = true
					}
					// if (i < this.state.starthour) {
					// 	hoursArray[i].disabled = true
					// }
				}
				for (i = 0; i < 24; i++) {
					hoursArray[i].disabled = false
					if (i < this.state.starthour) {
						hoursArray[i].disabled = true
					}
				}
			}
		}
		if (id === "endhour") {


			if (this.state.starthour < value) {
				// console.log("condition working endhour")
				for (i = 0; i < 60; i++) {
					minArray[i].disabled = false

				}
			}
		}
		// console.log(parseInt(currentTarget.value))
		this.setState({
			[id]: value,
			hoursArray,
			minArray

		}, () => { console.log("event id and value:", e.target.id, e.target.value) })
	}
	// onChangeMin = (e) => {
	// 	console.log("sss", e)
	// 	this.setState({
	// 		startmin: parseInt(e.target.value)
	// 	})
	// }
	// onEndHour = (e) => {
	// 	// console.log('e.target.value: ', e.target.value);
	// 	this.setState({
	// 		endhour: parseInt(e.target.value)

	// 	})

	// }
	// onEndMin = (e) => {
	// 	this.setState({
	// 		endmin: parseInt(e.target.value)
	// 	})
	// }
	render() {
		console.log(this.state);
		// var shours = []
		// var count = 0
		// for (var i = 0; i <= 23; i++) {
		// 	shours.push(i)
		// }
		// var smins = []
		// for (i = 0; i <= 59; i++) {
		// 	smins.push(i)
		// }
		var selectedHours = this.state.starthour
		// console.log('selectedHours: ', selectedHours);
		var selectedMins = this.state.startmin
		// var ehours = []
		// console.log(this.state.endhour, this.state.endmin)
		// if (selectedHours < 23 && selectedMins < 59) {
		// 	for (i = selectedHours; i <= 23; i++)
		// 		ehours.push(i)
		// console.log('ehours: ', ehours);
		// }
		// if (selectedHours < 23 && selectedMins === 59) {
		// 	for (i = (selectedHours + 1); i <= 23; i++)
		// 		ehours.push(i)
		// }
		// if (selectedHours === 23 && selectedMins < 59) {
		// 	ehours.push(23)
		// }
		// var emin = []
		// if (selectedHours && selectedMins < 59) {
		// 	for (i = selectedMins; i <= 59; i++)
		// 		emin.push(i)
		// }
		// if (selectedHours < 23 && selectedMins === 59) {
		// 	for (i = 0; i <= 59; i++)
		// 		emin.push(i)
		// }
		// if (selectedHours === 23 && selectedMins === 59) {
		// 	return
		// 	console.count()

		// 	// alert("You can only select till 58 mins")

		// }
		// if (selectedHours === 23 && selectedMins === 58) {

		// 	emin = []
		// 	emin.push(59)

		// }
		// var endHours = this.state.endhour
		// if (endHours > selectedHours) {
		// 	emin = []
		// 	for (i = 0; i <= 59; i++)
		// 		emin.push(i)

		// }

		return (
			<>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<label htmlFor="shour">Choose Starting Hour:</label>
					<br></br>
					<select id="starthour" value={this.state.starthour} onChange={this.onChangeHandler}>
						{this.state.hoursArray.map(hr => <option key={hr.value} value={hr.value}>{hr.value}</option>)}
					</select>
					<label htmlFor="smin">Choose Starting Minutes:</label>
					<br></br>
					<select id="startmin" value={this.state.startmin} onChange={this.onChangeHandler}>
						{this.state.minArray.map(min => <option key={min.value} value={min.value}>{min.value}</option>)}
					</select>

				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<label htmlFor="ehour">Choose Ending Hour:</label>
					<br></br>
					<select id="endhour" value={this.state.endhour} onChange={this.onChangeHandler}>
						{this.state.hoursArray.map(hr => <option key={hr.value} disabled={hr.disabled} value={hr.value}>{hr.value}</option>)}
					</select>
					<label htmlFor="emin">Choose Ending Mins:</label>
					<br></br>
					<select id="endmin" value={this.state.endmin} onChange={this.onChangeHandler}  >
						{this.state.minArray.map(min => <option key={min.value} disabled={min.disabled} value={min.value}>{min.value}</option>)}
					</select>
				</div>
			</>
		)
	}
}
export default Selects;