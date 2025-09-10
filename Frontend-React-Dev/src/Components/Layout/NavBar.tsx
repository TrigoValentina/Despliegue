import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/logoSedes-removebg-preview.png';
import userIcon from '../../assets/Images/userInfo.png';
import { useAuth } from '../../Context/AuthContext';
import axios from 'axios';

interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  const {
    usuarioID,
    establecimientoID,
    setIsAuthenticated,
    setRole,
    setUsuarioID,
    setEstablecimientoID,
  } = useAuth();

  const [userFullName, setUserFullName] = useState('');
  const [userRole, setUserRole] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
      setUserFullName(`${user.nombres} ${user.primer_apellido}`);
      setUserRole(user.rol);
      const idEstablecimiento = user.establecimiento_id;
      setEstablecimientoID(idEstablecimiento);
      fetchHospitalName(idEstablecimiento);
    }
  }, [setEstablecimientoID]);

  const fetchHospitalName = async (establecimientoID: string) => {
    try {
      const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/establecimiento/${establecimientoID}`;
      const response = await axios.get(apiUrl);
      if (response.data && response.data.nombre) {
        setHospitalName(response.data.nombre);
      } else {
        console.warn('Nombre del hospital no encontrado en la respuesta', response.data);
      }
    } catch (err) {
      console.error('Error al cargar el nombre del hospital:', err);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setRole('');
    setUsuarioID(null);
    setEstablecimientoID(null);
    navigate('/login');
  };

  const handleChangePassword = () => {
    navigate('/cambiar-contrasenia');
  };

  // Cerrar menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-400 shadow-md p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={onToggleSidebar}
            className="text-white focus:outline-none transform transition-transform hover:rotate-180 duration-500 ease-in-out"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <img
            src={logo}
            alt="App Logo"
            className="h-12 ml-4 hover:scale-110 transition-transform duration-300 ease-in-out transform shadow-lg"
          />
        </div>

        <div className="relative ml-auto">
          <button onClick={toggleDropdown} className="flex items-center focus:outline-none">
            <img
              src={userIcon}
              alt="User Icon"
              className="w-8 h-8 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <span className="ml-2 text-white font-bold">User Info</span>
          </button>

          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50 text-sm leading-tight"
            >
              <div className="px-4 py-1 text-gray-700">
                <strong>Nombre:</strong> {userFullName}
              </div>
              <div className="px-4 py-1 text-gray-700">
                <strong>Rol:</strong> {userRole}
              </div>
              <div className="px-4 py-1 text-gray-700">
                <strong>Hospital:</strong> {hospitalName || 'Cargando...'}
              </div>

              <button
                onClick={handleChangePassword}
                className="w-full text-left px-4 py-1 text-gray-700 hover:bg-gray-100"
              >
                Cambiar Contraseña
              </button>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-1 text-gray-700 hover:bg-gray-100"
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
