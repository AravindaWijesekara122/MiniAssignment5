﻿using BusinessLogicLayer.DTOs;
using BusinessLogicLayer.IServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace PresentationLayer.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IAuthService _authService;
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        //[Authorize(Roles = "Organizer")]
        [HttpPost("organizer/login")]
        public IActionResult OrganizerLogin([FromBody] LoginDTO loginDTO)
        {
            try
            {
                var token = _authService.OrganizerLogin(loginDTO);
                return Ok(new {
                    Message = "Login Successfull..",
                    Token = token
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        //[Authorize(Roles = "Attendee")]
        [HttpPost("attendee/login")]
        public IActionResult AttendeeLogin([FromBody] LoginDTO loginDTO)
        {
            try
            {
                var token = _authService.AttendeeLogin(loginDTO);
                return Ok(new
                {
                    Message = "Login Successfull..",
                    Token = token
                });
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}