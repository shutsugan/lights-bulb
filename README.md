# light-bubls

Home automation light controlling system, controlled by a single resin device that can turn the light on or off and control its brightness

## Running Locally

### Installing Node.js modules

Once you have Node and npm installed and this repository downloaded, you'll need
to install the application's dependencies:

    npm install

install dependencies for client side:

    cd client && npm install

to run for development run:
	
	npm run dev

to run client side tests run:

	cd client && npm run t

### App ScreenShots

Desktop screenshot:
	
	![light-bubls screenshot](../blob/master/desktop.png)

Mobile screenshot:
	
	![light-bubls screenshot](../blob/master/mobile.png)

## Documentation

	<Navbar date={date} time={time} />

Navbar component takes two properties date and time to display, the properties are formatted using dateformat.

	<Profilebar />

Profilebar component the child of Navbar, displays user information.

	<SubNavbar title={title} />

SubNavbar component takes title properties, has two child buttons to the left.

	<Main />

Main component that contains the main component of the app.
fetch the devices from the api when the component mount,
passe the devices state to the MainTable component.
and passe the current selected device to MainTable and Slider components

	<MainTable devices={devies} current={current} />

MainTable component takes two properties and two callbacks,
build a custom array data that contains the devices data, DefaultInput and SwitchButton component. then select a row to activate it and set current device in the Main component to passe to the Slider component.

	<DefaultInput />

DefaultInput component takes id, name properties and two callbacks,
click a name to change the device name.

	<SwitchButton />

SwitchButton component takes selected, id, state properties and two callbacks,
when clicked toggle the state of the device and update the Slider component.

	<Slider current={current} />

Slider component takes current property and two callbacks,
when a device is selected the slider brightness mirrors the brightness
of if, and when the slider is interacted with the SwitchButton and brightness
is changed based on it state,

I've tried to make the Slider component as close as  I can to the screenshot you sent me, It would be great if you gave me some hints on how I can make the gap in the bottom of the slider, thank you.