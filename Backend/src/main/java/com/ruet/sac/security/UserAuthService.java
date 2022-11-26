package com.ruet.sac.security;

import com.ruet.sac.entity.Alumnus;
import com.ruet.sac.repository.AlumnusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static java.lang.Integer.parseInt;

@Service
public class UserAuthService implements UserDetailsService {

    @Autowired
    private AlumnusRepository userRepository;

    @Transactional(readOnly = true)
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Alumnus user = userRepository.getReferenceById(parseInt(username));
        if (user == null)
            throw new UsernameNotFoundException(username);

        Boolean lockStatus=false;
        if(user.getStatus()==0) lockStatus = true;
        return org.springframework.security.core.userdetails.User.builder()
                .username(username)
                .password(user.getPassword())
                .authorities("USER")
                .accountLocked(lockStatus)
                .roles("USER")
                .build();
    }
}
