package rohan.securities.securitiesweb.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SecuritiesWebController {

	@GetMapping("/")
	public String getHome(){
		return "index";
	}
}
