﻿using BusinessLogicLayer.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogicLayer.IServices
{
    public interface IAuthService
    {
        LoginOutputDTO OrganizerLogin(LoginDTO loginDTO);
        string AttendeeLogin(LoginDTO loginDTO);
    }
}
