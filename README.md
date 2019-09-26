# This is forked from [m10c theme](https://github.com/vaga/hugo-theme-m10c)

m10c is a wonderful theme, but I wanted to add a email subscription widget. I thought this is a better way to implement that then copy the baseof.html file into my project's layout and alter it. If you know a better way of doing that please let me know. 

JavaScript is used for ajax calls to the subscrption endpoint. The widget is hidden for browser with JS disabled.

### Configuration

This theme has a email subscription widget that fires off the subscribe request to be handled by an endpoint.

It can be customized with the following settings under `params.subscribe`:

- `enabled`: turns the widget on, this has to be true for the widget to show up
- `message`: short description for the widget
- `endpoint`: endpoint handling the subsciption
- `method`: http method for the endpoint
	
Eample of the configuration in your config.toml

```
[params]

	... other settings

[params.subscribe]
	enabled = true
	message = "This is a email sub widget"
	endpoint = "https://example.com/subscribe"
	method = "post"
	
```
