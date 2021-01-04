using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserRegWeb.Data;
using UserRegWeb.Data.Entity;
using UserRegWeb.Services.Interfaces;

namespace UserRegWeb.API
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class MasterDataController : ControllerBase
    {
        private readonly IMasterService _masterService;

        public MasterDataController(IMasterService _masterService)
        {
            this._masterService = _masterService;
        }

        // api/MasterData/GetAllGender
        [HttpGet]
        public async Task<IEnumerable<Gender>> GetAllGender()
        {
            return await _masterService.GetAllGender();
        }

    }
}