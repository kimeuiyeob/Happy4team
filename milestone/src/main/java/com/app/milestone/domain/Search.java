package com.app.milestone.domain;

import lombok.Data;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Data
public class Search {

    private List<String> schoolAddress;
    private String schoolName;

    /*===============================*/

    private String talentTitle;
    private String talentCategory;
    private List<String> talentPlace;

    /*===============================*/

    private String userName;
    private String peopleNickName;
}
